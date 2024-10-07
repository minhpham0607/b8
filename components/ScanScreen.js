import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ScanScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Nút quay lại */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      <Image
        source={{ uri: 'https://s3-alpha-sig.figma.com/img/95fa/878b/d5bc6b7e5e42324b3bb5c2a6b4e4bf3b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U6vCjQW2YEwPaTgstYIINiwcVL1byYe8HHe~EGDkEkwgA-RyVbPrCV5YBbo478xW4k0vhxi3r-kqVqBQQ4-8No-S3Kn47kl8nzRN9tknHoNZQEtGkIz5nOn-Z9SfEEg5yF4Fh96JX-wjkSkIxRlVUR8xDZ3VHm7tZ62II045EQ30Ophj9MiLX8Zt0ZouOzyl8XPqbSnesDynLbfp6JNUUEyrhXj7QmJwcwe-QziYUO70EmqFgP64Gm8NOXVOw3X5vP16~iig8Tnly12Oz~X~snhQlwTjrWKZzOl8KOgvWlu01R3GxnnZE-nEzuz8tLwGovA2EVAEjUQJFtOfrvDNdQ__' }} // Replace with your image URL
        style={styles.backgroundImage}
      />

      <View style={styles.overlay}>
        <View style={styles.scannerFrame} />
      </View>

      <View style={styles.productInfo}>
        <Image
          source={{ uri: 'https://s3-alpha-sig.figma.com/img/95fa/878b/d5bc6b7e5e42324b3bb5c2a6b4e4bf3b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U6vCjQW2YEwPaTgstYIINiwcVL1byYe8HHe~EGDkEkwgA-RyVbPrCV5YBbo478xW4k0vhxi3r-kqVqBQQ4-8No-S3Kn47kl8nzRN9tknHoNZQEtGkIz5nOn-Z9SfEEg5yF4Fh96JX-wjkSkIxRlVUR8xDZ3VHm7tZ62II045EQ30Ophj9MiLX8Zt0ZouOzyl8XPqbSnesDynLbfp6JNUUEyrhXj7QmJwcwe-QziYUO70EmqFgP64Gm8NOXVOw3X5vP16~iig8Tnly12Oz~X~snhQlwTjrWKZzOl8KOgvWlu01R3GxnnZE-nEzuz8tLwGovA2EVAEjUQJFtOfrvDNdQ__' }} // Replace with your image URL
          style={styles.productThumbnail}
        />
        <Text style={styles.productName}>Lauren's Orange Juice</Text>
        <TouchableOpacity style={styles.addButton}>
          <Icon name="add" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 8,
    zIndex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover', 
  },
  overlay: {
    position: 'absolute',
    width: '70%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2, 
  },
  scannerFrame: {
    width: '100%',
    height: '100%',
    borderWidth: 4,
    borderColor: '#fff',
    borderRadius: 20, // Keep it rounded
    borderStyle: 'solid', // Change to solid border
    position: 'absolute',
    top: 0,
    left: 0,
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    borderRadius: 20,
    padding: 10,
    width: '90%',
    position: 'absolute',
    bottom: 30, 
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  productThumbnail: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  addButton: {
    backgroundColor: '#007bff',
    borderRadius: 50,
    padding: 5,
  },
});
