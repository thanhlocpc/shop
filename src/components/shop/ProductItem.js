import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {BoxShadow} from 'react-native-shadow';

import {Colors} from '../../constants/Colors';
import ActionButton from './ActionButton';

const CARD_HEIGHT = 280;

const shadowOpts = {
  width: 320,
  // width: '40%',
  height: 250,
  color: '#0f0521',
  border: 33,
  radius: 20,
  opacity: 0.03,
  // x: 15,
  // y: 25,
  style: {
    // The parent view that contains all the content

    height: CARD_HEIGHT,
    width: '45%',
    // flex:0.5,
    
    // marginBottom: 10,
    marginTop:20

    // marginHorizontal: 30,
    // marginLeft: 30,
  },
};

const ProductItem = ({
  product,
  onActionPress,
  navigationRoute,
  ActionIcon,
  actionTitle,
  params,
  hideActionButton,
}) => {
  const navigation = useNavigation();

  const onItemPress = useCallback(() => {
    navigation.navigate(navigationRoute, {
      prodId: product.id,
      title: product.title,
    });
  }, [product]);

  const actionPressHandler = useCallback(() => {
    if (params) {
      onActionPress(product, params);
      return;
    }
    onActionPress(product);
  }, [product, params]);

  return (
    <BoxShadow setting={shadowOpts}>
      <TouchableOpacity activeOpacity={0.8} onPress={onItemPress}>
        <View style={styles.contentContainer}>
          <Image style={[styles.image]} source={{uri: product.imageUrl}} resizeMode='cover'/>
          <View style={styles.infoSection}>
            <View style={styles.details}>
              <Text style={styles.title}>{product.title}</Text>
              <Text style={styles.price}>${product.price}</Text>
            </View>
            {!hideActionButton && (
              <ActionButton
                title={actionTitle}
                Icon={ActionIcon}
                onPress={actionPressHandler}
                prodId={product.id}
              />
            )}
          </View>
        </View>
      </TouchableOpacity>
    </BoxShadow>
  );
};

export default React.memo(ProductItem);

const styles = StyleSheet.create({
  contentContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent:'space-between',
    // alignContent:'center',
    // alignItems:'center'
   
    // paddingLeft: 20,
    // paddingVertical: 20,
  },
  image: {
    // flex: 5,
    borderRadius: 20,
    width:'100%',
    height:'50%'
    
  },
  infoSection: {
    // flex: 3,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignContent:'center',
    // paddingHorizontal: 20,
  },
  details: {
    // flex: 1,
    // justifyContent: 'center',
    // alignContent:'center',
    alignItems:'center'
  },
  title: {
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    color: `rgb(${Colors.text.primary})`,
    marginBottom: 8,
    textAlign:'center'
  },
  price: {
    marginBottom: 8,
    fontFamily: 'Lato-Black',
    fontSize: 18,
    color: `rgb(${Colors.text.primary})`,
  },
});
