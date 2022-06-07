import React, { useEffect, useState } from "react";
import { useTheme, createUseStyles } from "react-jss";
import { httpGetDashboards } from "../../api.http";
import Bucket from "./Bucket";
import Card from "./Card";


  const useStyles = createUseStyles((theme) => ({
    dashboard : {
      display: 'flex',
      gap: 16,
      width: '100vw',
      height: '100vh',
      backgroundColor: theme.colors.primary,
      color: theme.colors.text,
      padding: 8,
    }
    }))



const Dashboard = () => {
  const [myDashboards, setMyDashboards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const classes = useStyles();

  
  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const { data } = await httpGetDashboards();
      setMyDashboards(data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };
  const theme = useTheme()
  useEffect(() => {
    console.log(theme)
  }, [theme]) 

  return (
    <>
      <div className={classes.dashboard}>
        {!isLoading ? (
          myDashboards.length > 0 ? (
            myDashboards.map(({ name, id, contents = [] }) => {
              return (
                <Bucket
                  title={name}
                  key={id}
                  dashKey={id}
                  loadDashboard={loadDashboard}
                >
                  {contents.map(({ text, id }) => (
                    <Card style={{backgroundColor: theme.colors.card}} descr={text} key={id} />
                  ))}
                </Bucket>
              );
            })
          ) : error ? (
            <span>**Boom**</span>
          ) : (
            <span>Non ci sono Dashboard</span>
          )
        ) : (
          <span>Caricamento</span>
        )}
      </div>
    </>
  );
};

export default Dashboard;
