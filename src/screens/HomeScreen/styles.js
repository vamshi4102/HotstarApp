import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0F1014',
  },
  container: {
    width: '90%',
    alignSelf: 'center',
  },
  top_bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  top_bar_left: {
    width: '25%',
  },
  logo: {
    height: 50,
    aspectRatio: 6 / 4,
    resizeMode: 'contain',
  },
  top_bar_right: {
    backgroundColor: 'green',
    width: '15%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'rgba(255,255,255,.7)',
    padding: 5,
  },
  stream: {
    height: 30,
    aspectRatio: 6 / 4,
    resizeMode: 'contain',
  },
  //   -------
  top_slide: {
    width: '100%',
    // aspectRatio: 24 / 16,
    height: 400,
    paddingTop: 50,
    resizeMode: 'cover',
  },
  top_btn_row: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
  },
  add_btn: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#212227',
    borderRadius: 5,
  },
  play_btn: {
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#212227',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  watch_now: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 5,
  },
  slide_footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
  },
  movie_details: {
    color: 'white',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  heading_row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  heading: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
