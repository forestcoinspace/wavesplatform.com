const styles = theme => ({
  image: {
    display: 'block',
    maxWidth: '100%',
    //margin: [theme.spacing.unit * 8, 0, 0],
    padding: theme.spacing.getSpacing(3, 0, 3, 0),
    margin: [0, 'auto'],
  },
  /*image: {
    display: 'block',
    //maxWidth: '100%',
    margin: [0, 'auto'],

  },*/
  text: {
    lineHeight: 1.3,
    paddingRight: 0,
  },
  twoblocks: {
    flexDirection: 'column-reverse',
  },
  svgrow: {
    display: 'none',
    boxShadow: '0 3px 20px 1px rgba(39, 47, 89, .09)',
    flexDirection: 'row',
    alignItems: 'center',
    margin: theme.spacing.getSpacing(3, 1, 3, 1),
  },
  [theme.breakpoints.up('sm')]: {
    svgrow: {
      display: 'flex',
    }
  },
  [theme.breakpoints.up('md')]: {
    twoblocks: {
      flexDirection: 'row',
    },
    svgrow: {
      margin: 0,
    },
  },
});

export default styles;
