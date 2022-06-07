import jss from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset())
jss.createStyleSheet({'@global ol,ul' : {listStyleType: 'none'}}, ).attach()

export const theme = {
    spacing: 8,
    colors: {
        primary: '#0279bf',
        secondary: '#ebecf0',
        black: '#000',
        white: '#fff',
        text: 'black',
        card: 'white',
    }
}

export const darkTheme = {
    spacing: 8,
    colors: {
        primary: '#510776',
        secondary: '#303030',
        white: '#fff',
        black: '#000',
        text: 'white',
        card: 'black',
    }
}

