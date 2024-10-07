import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons'; // Icon library

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.name}>Christie Doe</Text>
        </View>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
          style={styles.profileImage}
        />
      </View>

      {/* Insights Section */}
      <Text style={styles.insightTitle}>Your Insights</Text>
      <View style={styles.insightsContainer}>
        <TouchableOpacity style={styles.insightBox}>
          <Ionicons name="scan-outline" size={39} color="#8089FF" />
          <Text style={styles.insightText}>Scan new</Text>
          <Text style={styles.insightSubText}>Scanned 483</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.insightBox}>
          <Ionicons name="alert-circle-outline" size={39} color="#FFB6A0" />
          <Text style={styles.insightText}>Counterfeits</Text>
          <Text style={styles.insightSubText}>Counterfeited 32</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.insightBox}>
          <Ionicons name="checkmark-circle-outline" size={39} color="#9DE2BE" />
          <Text style={styles.insightText}>Success</Text>
          <Text style={styles.insightSubText}>Checkouts 8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.insightBox}>
          <Ionicons name="calendar-outline" size={39} color="#A8D8FC" />
          <Text style={styles.insightText}>Directory</Text>
          <Text style={styles.insightSubText}>History 26</Text>
        </TouchableOpacity>
      </View>

      {/* Explore More */}
      <View style={styles.exploreMore}>
        <Text style={styles.exploreText}>Explore More</Text>
        <Feather name="arrow-right" size={24} color="black" />
      </View>
  
      <View style={styles.insightsContainer1}>
        <TouchableOpacity style={styles.insightBox1}>
          <Image
            source={{ uri: 'https://s3-alpha-sig.figma.com/img/5b61/8cde/c72d19880cf9e8aeb73ab70e0060159c?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OugX3MoBqa8H4ZfZDwI0JmqAW9oe1CEtrGqGQM-8oALtjU4Jc3ELEmbGgF0Wu5NSul2bewWjU-mAm9gIlkdx-JYBU3VtotJCWUFFR1AyMEUTkMubDgPDVQcHGqiMB5ND5GHs4H4rT3buyk8wfTa5rsgWw~BodwYn8ZyqeMftw0E4IIa7iGj13TiUgApjwS7ApA-cNRKJt1qoRjlknLYDc~2F3PBhG3OtqeFiFp8sMfacHRoXK4yBGV6xDloTtqG1-8jqV6SxDRqY~Dn27iBS6ys-xSilPrXBORCqyIHpmLokK24ymS4fOTFMyFPd3pKkJl3wPcrJhym4Sa9Ke30~gQ__' }} // Replace with your image URL
            style={styles.insightImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.insightBox1}>
          <Image
            source={{ uri: 'https://s3-alpha-sig.figma.com/img/2f1f/32ca/1c55b7eced1e5474c344ee611eef886f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QrGPX6GHwlQb1nzLT5Hfngw5AWoJJ7631TaWX-CZlXnK-PI~08bSfY~E2crWQs4cl27l1UkZKpU6Vdj-fALKz1s1p7z6YBf1cxd~2eQKVXrFJtnQJjLAG52gXKN3FyQvpmICO0jSBxIv8kK-zGTUSTDR1Pdpa6DzMDa77UM13mEw09JMCtgCxSvgaJjIkgLCFaqUd5TCSS0AvWjfNTW7jRNNvY4QAiHnqEoGElKein7KugjR4lfNciQq-pysFpursfydvjvlrz7X4jfyFy8mgcxyGjEYsaeCcE3JSxWfGdVE7IAmComK1I0fYsLA5gPQ2X22h7LZeuMUUZvPxwNa-Q__' }} // Replace with your image URL
            style={styles.insightImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.insightBox1}>
          <Image
            source={{ uri: 'https://s3-alpha-sig.figma.com/img/ec01/2ef5/ca2e3c7dfc671b6ad1a73190c866c506?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EDobqOYoajjDS5B3KxNRPcIWYjo9cqLBskZzMAsfk5y4JbymwJtkI4HlzObqwttnkJaBO9XhJ~w3p7I2vGM8inItw4O7q70G42Hew9GM2jQeOJVzaBXtZD17~LLWj-QUnsFOhC1hiVXZQnNXXIbzVsOaT~n29JwcCbMiInGd9HzA0rDlISYwGxe6BbT3frnb1fOM8KkL72A0jrLp9VYb6GGamzIRpfzqq3ChEmh1L3YnE~Helv-TnmPig2ba0dnrWJL46-1vzWr7iEj1v90il8cfqf2fMlCJoBKTn7PXMd7jbnSFLIEqF91dEY6khgeGlRp95X0ihK0zV56kRi1btg__' }} // Replace with your image URL
            style={styles.insightImage}
          />
        </TouchableOpacity>
</View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '600',

 
  marginTop: 80,   // 20px margin on the top

  },
  insightImage: {
    width: '100%',             // Image fills the width of the box
    height: '100%',            // Image fills the height of the box
    borderRadius: 10,          // Apply the same border radius as the box
    resizeMode: 'cover',       // Ensures the image fills the box while maintaining aspect ratio
  },
  
  name: {
    fontSize: 16,
    color: '#777',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop: 80,   // 20px margin on the top
  },
  insightTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    marginTop:20,
  },
  insightsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  insightsContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    flexDirection: 'row',
  alignItems: 'center',           // Center items vertically
  marginBottom: 20,               
  },
  
  insightBox: {
    backgroundColor: '#F9FAFB',
    width: '45%',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',   // Center vertically
    alignItems: 'center',
    marginBottom: 15,
    height: 150,
   
  },
  insightBox1: {
 
    width: '45%',
    padding:10,
    borderRadius: 10,
    justifyContent: 'center',   // Center vertically
    alignItems: 'center',
    marginBottom: 15,
    height: 200,
   marginTop:10,
   marginLeft:-5
  },
  insightText: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 5,
  },
  insightSubText: {
    fontSize: 12,
    color: '#777',
  },
  exploreMore: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  exploreText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
