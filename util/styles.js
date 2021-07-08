
export const useStyles = makeStyles(() => ({
    hero: {
      backgroundImage: 'linear-gradient(66deg,rgba(0,0,0,.85),rgba(0,0,0,.7) 25%,rgba(0,0,0,.3) 50%,rgba(0,0,0,.1) 75%,rgba(0,0,0,0)),url(/images/1.jpeg)',
      backgroundPosition: 'top',
      backgroundSize: 'cover',
      padding: '140px 0',
      color: 'white',
      textAlign: 'right',
    },
    root: {
      flexGrow: 1,
      display: 'flex',
      alignItems:'center',
      justifyContent: 'center',
    },
    imageFit: {
      left: '50%',
      height: '100%',
      position: 'relative',
      transform: 'translateX(-50%)',
    },
    imageFull: {
      width: '100%',
      height: '100%',
    },
    imageContainer: {
      position: 'relative',
    },
    titleCard: {
      height: '100%',
      width: '100%',
    },
    gridTile: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    col: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
  }));
  