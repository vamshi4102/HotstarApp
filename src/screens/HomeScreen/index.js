import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {PlayIcon, PlusIcon,ChevronRightIcon} from 'react-native-heroicons/solid';
import LinearGradient from 'react-native-linear-gradient';
import PreviousVideoCard from '../../components/PreviousVideoCard';
import FooterBar from '../../components/FooterBar';
const HomeScreen = () => {
  return (
    <View style={styles.body}>
      <ImageBackground
        style={styles.top_slide}
        source={{
          uri: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_2_5x/sources/r1/cms/prod/2975/1642975-v-70aa4742a63e',
        }}>
        {/* top navbar */}
        <View style={styles.top_bar}>
          <View style={styles.top_bar_left}>
            <Image
              style={styles.logo}
              source={{
                uri: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/v1656431456/web-images/logo-d-plus.svg',
              }}
            />
          </View>
          <View style={styles.top_bar_right}>
            <Image
              style={styles.stream}
              source={{
                uri: 'https://static-00.iconduck.com/assets.00/stream-to-tv-icon-2048x1792-4bjq5ppr.png',
              }}
            />
          </View>
        </View>
        {/* featured slides */}
        <LinearGradient colors={['rgba(0,0,0,0.1)', '#0F1014']} style={styles.slide_footer}>
          <Text style={styles.movie_details}>
            2023 · Triller · Movie · 4 languages
          </Text>
          <View style={styles.top_btn_row}>
            <TouchableOpacity style={styles.play_btn}>
              <PlayIcon color={'#fff'} size={25} />
              <Text style={styles.watch_now}>Watch now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.add_btn}>
              <PlusIcon color={'#fff'} size={25} />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
      <View style={styles.container}>
        {/* continue watching */}
        <View style={styles.heading_row}>
         <Text style={styles.heading}>Continue watching vamshi</Text> 
            <ChevronRightIcon size={20} color={'#fff'} />
        </View>
        <PreviousVideoCard />
        {/* bottom sub navigation */}
      </View>
        <FooterBar />
    </View>
  );
};

export default HomeScreen;
