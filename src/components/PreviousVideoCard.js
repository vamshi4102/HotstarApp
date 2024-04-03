import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {
  PlayIcon,
  PlusIcon,
  EllipsisVerticalIcon,
} from 'react-native-heroicons/solid';
import LinearGradient from 'react-native-linear-gradient';

const PreviousVideoCard = () => {
  const Video = {
    id: '1',
    name: 'Vakeelsaab',
    image:
      'https://e0.pxfuel.com/wallpapers/47/809/desktop-wallpaper-vakeelsaab-2020-stills-first-look-posters-of-vakeelsaab-2020-movie.jpg',
    duration: 9300,
    watchedDuration: 2530,
  };

  function ConvertSecoundsToTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let remainingSeconds = seconds % 60;

    let timeString = '';
    if (hours > 0) {
      timeString += hours + 'hours';
    }
    if (minutes > 0) {
      timeString += minutes + 'minutes';
    }
    if (remainingSeconds > 0) {
      timeString += remainingSeconds + 'seconds';
    }
    return timeString;
  }

  const VideoDuration = ConvertSecoundsToTime(Video.duration);

  function WatchedPercentage(total,watched){
    let remaining  = total - watched;
    let percentage = (remaining/total) * 100; 
    return percentage;
  }
  let GetVideoDuration = Video.duration;
  let GetWatchedDuration = Video.watchedDuration;
  const WatchPercentage = WatchedPercentage(GetVideoDuration,GetWatchedDuration);


  return (
    <View style={styles.card}>
      <ImageBackground
        style={styles.image}
        source={{
          uri: Video.image,
        }}>
        {/* featured slides */}
        <LinearGradient
          colors={['rgba(0,0,0,0.1)', '#0F1014']}
          style={styles.slide_footer}>
          <TouchableOpacity style={styles.play_btn}>
            <PlayIcon color={'#fff'} size={25} />
          </TouchableOpacity>
        </LinearGradient>
        <View style={styles.video_length}>
          <View style={[styles.watched_length,{width:WatchPercentage}]} />
        </View>
      </ImageBackground>
      <View style={styles.video_details}>
        <View>
          <Text style={styles.video_name}>{Video.name}</Text>
          <Text style={styles.video_time}>{VideoDuration}</Text>
        </View>
        <TouchableOpacity>
          <EllipsisVerticalIcon color={'#fff'} size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PreviousVideoCard;

const styles = StyleSheet.create({
  name: {
    color: '#fff',
  },
  card: {
    height: 120,
    aspectRatio: 16 / 9,
    borderWidth: 1,
    borderRadius:10
    // borderColor: 'red',
  },
  image: {
    height: '100%',
    aspectRatio: 16 / 9,
    backgroundColor: 'lightblue',
    borderRadius:50
  },
  slide_footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingLeft: 10,
    paddingVertical: 10,
  },
  video_details: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  video_name: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 16,
  },
  video_time: {
    color: 'gray',
    fontSize: 16,
  },
  video_length: {
    width: '100%',
    height: 3,
    backgroundColor: 'gray',
    position: 'absolute',
    bottom: 0,
  },
  watched_length: {
    // width: '35%',
    height: '100%',
    backgroundColor: 'blue',
  },
});
