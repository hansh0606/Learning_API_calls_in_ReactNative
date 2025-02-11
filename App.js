import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const App = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      try {
        const response = await fetch(
          "https://mocki.io/v1/021cbcca-b77b-4cf3-bde4-d6f41508fde4"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  function displayImage(user) {
    const items = data[user];
    const itemCount = items.length;

    if (itemCount % 2 === 0) {
      // Even number of images: display 2 per row
      return (
        <View style={styles.grid}>
          {items.map((item, index) => (
            <View key={index} style={styles.imageWrapper}>
              <Image source={{ uri: item.url }} style={styles.image} />
              <View style={[styles.overlay, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]}>
                <Text style={styles.overlayText}>{item.title}</Text>
              </View>
            </View>
          ))}
        </View>
      );
    } else if (itemCount === 3) {
      // For exactly 3 images: first spans full width, then 2 per row
      return (
        <View style={styles.grid}>
          <View style={[styles.imageWrapper, { width: "100%" }]}>
            <Image source={{ uri: items[0].url }} style={styles.image} />
            <View style={[styles.overlay, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]}>
              <Text style={styles.overlayText}>{items[0].title}</Text>
            </View>
          </View>
          <View style={styles.gridRow}>
            {items.slice(1).map((item, index) => (
              <View key={index} style={styles.imageWrapper}>
                <Image source={{ uri: item.url }} style={styles.image} />
                <View style={[styles.overlay, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]}>
                  <Text style={styles.overlayText}>{item.title}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      );
    } else {
      // Odd number of images, excluding 3: first spans full width, rest in 2-per-row
      return (
        <View style={styles.grid}>
          <View style={[styles.imageWrapper, { width: "100%" }]}>
            <Image source={{ uri: items[0].url }} style={styles.image} />
            <View style={[styles.overlay, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]}>
              <Text style={styles.overlayText}>{items[0].title}</Text>
            </View>
          </View>
          <View style={styles.gridRow}>
            {items.slice(1).map((item, index) => (
              <View key={index} style={styles.imageWrapper}>
                <Image source={{ uri: item.url }} style={styles.image} />
                <View style={[styles.overlay, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]}>
                  <Text style={styles.overlayText}>{item.title}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      );
    }
  }

  return (
    <View style={styles.container}>
      {error && <Text style={styles.errorText}>Error: {error}</Text>}
      <ScrollView>
        {Object.keys(data).map((user) => (
          <View key={user}>
            <Text style={styles.headerText}>{user}</Text>
            {displayImage(user)}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 10,
    backgroundColor: "#f9f9f9",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  gridRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  imageWrapper: {
    marginBottom: 10,
    width: "48%",
    marginHorizontal: "1%",
  },
  image: {
    width: "100%",
    height: 150, // Square images
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Slightly transparent black overlay
    paddingVertical: 5,
    textAlign: "center",
  },
  overlayText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  errorText: {
    color: "#ff0000",
    textAlign: "center",
    marginVertical: 15,
    fontSize: 18,
  },
});

export default App;
