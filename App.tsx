import { useState } from "react";
import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from "react-native";

// ✅ Import Images Here (Replace Paths)
const workoutIcons = {
  warmup: require("./assets/warmup.png"),
  strength: require("./assets/strength.png"),
  plank: require("./assets/plank.png"),
  abs: require("./assets/abs.png"),
  torso: require("./assets/torso.png"),
  lowerback: require("./assets/lowerback.png"),
  arrow: require("./assets/rightarrow.png"),
  search: require("./assets/search.png"),
};
  
const FitnessAppScreen = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const notifications = [
    "Don't forget to hydrate during your workout",
    "Congrats on completing your first week of workouts!",
    "It's HIIT o'clock! Time for a quick and intense workout",
    "Hey fitness enthusiast, time to log your latest workout",
  ];
  const categories = ["All", "Warm Up", "Yoga", "Biceps", "Chest", "Cardio"];
  console.log("Applying font: Kurale");
    
  
  
  return (
    <View style={styles.container}> 
      {/* Scrollable Content */}
      <ScrollView style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileContainer}>
            <Image source={require("./assets/avatar.png")} style={styles.profileImage} />
            <Text style={styles.greetingText}>Welcome  </Text>
            <Text style={styles.greetingText2}> {"\n"}Utkarsh Sundkar</Text>
          </View>
          <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => setShowNotifications(!showNotifications)}>
              <Image source={require("./assets/notification.png")} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={workoutIcons.search} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
          {/* Notification Panel */}
          {showNotifications && (
          <View style={styles.notificationPanel}>
            <Text style={styles.notificationTitle}>Notifications</Text>
            {notifications.map((notification, index) => (
              <View key={index} style={styles.notificationItem}>
                <Text style={styles.notificationText}>{notification}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Banner Section */}
        <View style={styles.banner}>
          <View style={styles.bannerText}>
            <Text style={styles.bannerTitle}>Start Strong and     Set Your Fitness  Goals</Text>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}>Start Exercise</Text>
            </TouchableOpacity>
          </View>
          <Image source={require("./assets/bannerimage.png")} style={styles.bannerImage} />
        </View>

        {/* Progress Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Progress</Text>
            <Text style={styles.seeAll}>See All</Text>
          </View>
          <View style={styles.progressContainer}>
            <View style={styles.progressCard}>
              <Image source={require("./assets/Deadlift.png")} style={styles.progressIcon} />
              <Text>Beginner</Text>
              <Text>5 sets of exercises</Text>
            </View>
            <View style={styles.progressCard}>
              <Image source={require("./assets/intermediate.png")} style={styles.progressIcon} />
              <Text>Intermediate</Text>
              <Text>5 sets of exercises</Text>
            </View>
          </View>
        </View>

        {/* ✅ Categories Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
          {categories.map((category, index) => (
            <TouchableOpacity key={index} style={index === 0 ? styles.activeCategory : styles.category}>
              <Text style={index === 0 ? styles.activeCategoryText : styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Workouts List */}
        <View style={styles.workoutList}>
          {[
            { title: "Full Body Warm Up", exercises: 20, time: "22 Min", icon: workoutIcons.warmup },
            { title: "Strength Exercise", exercises: 12, time: "14 Min", icon: workoutIcons.strength },
            { title: "Both Side Plank", exercises: 15, time: "18 Min", icon: workoutIcons.plank },
            { title: "Abs Workout", exercises: 16, time: "18 Min", icon: workoutIcons.abs },
            { title: "Torso and Trap Workout", exercises: 8, time: "10 Min", icon: workoutIcons.torso },
            { title: "Lower Back Exercise", exercises: 14, time: "18 Min", icon: workoutIcons.lowerback },
          ].map((workout, index) => (
            <TouchableOpacity key={index} style={styles.workoutCard}>
              <Image source={workout.icon} style={styles.workoutIcon} />
              <View style={styles.workoutInfo}>
                <Text style={styles.workoutTitle}>{workout.title}</Text>
                <Text style={styles.workoutDetails}>
                  {workout.exercises} Exercises • {workout.time}
                </Text>
              </View>
              <Image source={workoutIcons.arrow} style={styles.arrowIcon} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* ✅ Bottom Tab (Fixed Position) */}
      <View style={styles.bottomTab}>
        <TouchableOpacity style={styles.tabButton}>
          <Image source={require("./assets/home.png")} style={styles.tabIcon} />
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Image source={require("./assets/meal.png")} style={styles.tabIcon} />
          <Text style={styles.tabText}>Workouts</Text>
        </TouchableOpacity>
        <View style={{ flex: 0 }} />
        {/* Floating Button in the Middle */}
        <TouchableOpacity style={styles.floatingButton}>
          <Image source={require("./assets/plus.png")} style={styles.floatingIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabButton}>
          <Image source={require("./assets/stats.png")} style={styles.tabIcon} />
          <Text style={styles.tabText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Image source={require("./assets/profile.png")} style={styles.tabIcon} />
          <Text style={styles.tabText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FitnessAppScreen;

// ✅ Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  content: {
    flex: 1,
    padding: 10,
    marginBottom: 70, // Ensures scrolling content doesn't overlap bottom tab
  },
  bottomTab: {
    flexDirection: "row",
    justifyContent:"space-around",
    backgroundColor: "#fff",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
    height: 60,
  },
  tabButton: {
    alignItems: "center",
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
  tabText: {
    fontSize: 12,
    marginTop: 2,
  },
  floatingButton: {
    width: 60,
    height: 60,
    backgroundColor: "#CDE26D",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    position: "absolute",
    bottom: 25,
    left: "50%",
    marginLeft: -30,
  },
  floatingIcon: {
    width: 28,
    height: 28,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  greetingText: {
    fontSize: 19,
    marginLeft: 15,
    fontFamily: "Kurale-Regular",
    color: "#808080",
    marginBottom: 20,
  },
  greetingText2: {
    fontSize: 19,
    marginLeft: -85,
    fontFamily: "Kurale-Regular",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  // ✅ Categories Styling
    sectionHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: 10,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: "bold",
    },
    seeAll: {
      color: "#F47551",
    },
    
    // ✅ Categories Styling
    categoryScroll: {
      flexDirection: "row",
      marginBottom: 10,
    },
    category: {
      paddingHorizontal: 15,
      paddingVertical: 8,
      borderColor: '#CFCFE2',
      borderWidth: 1,
      borderRadius: 20,
      marginRight: 10,
    },
    activeCategory: {
      paddingHorizontal: 15,
      paddingVertical: 8,
     borderColor: "#F47551",
     borderWidth: 1,
      borderRadius: 20,
      marginRight: 10,
    },
    categoryText: {
      color: "#CFCFE2",
      fontWeight: "bold",
    },
    activeCategoryText: {
      color: "#F47551",
      fontWeight: "bold",
    },
  
    workoutList: {
      marginBottom: 80, // Space for bottom tab
    },
    workoutCard: {
      backgroundColor: "#FAFAFA",
      padding: 15,
      borderRadius: 10,
      marginVertical: 5,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderWidth: 1,
      borderColor: "#3F7E03",
    },
    workoutIcon: {
      width: 80,
      height: 40,
      marginRight: 20,
    },
    workoutInfo: {
      flex: 1,
    },
    workoutTitle: {
      fontSize: 16,
      fontWeight: "bold",
    },
    workoutDetails: {
      fontSize: 12,
      color: "gray",
    },
    arrowIcon: {
      width: 20,
      height: 20,
    },
    progressContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 10,
    },
    progressCard: {
      backgroundColor: "#f3f4f6",
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
      width: "48%",
    },
    progressIcon: {
      width: 40,
      height: 70,
      marginBottom: 5,
    },
    section: {
      marginVertical: 10,
    },
    banner: {
      backgroundColor: "#Ffffff",
      borderWidth: 1.5,
  borderColor: "#F47551",
      borderRadius: 16,
      padding: 15,
      marginVertical: 10,
      height: 176,
      width: 350,
      marginHorizontal: 30,
      flexDirection:"row",
      alignItems: "center",
    },
    bannerText: {
      flex: 1,
    },
    bannerTitle: {
      fontSize: 24,
      // Try each of these one at a time:
      fontFamily: "Kurale-Regular",
      lineHeight: 30,
    },
    startButton: {
      backgroundColor: "#F4D7CF",
      padding: 10,
      borderRadius: 15,
      marginTop: 10,
      width: 150,
    },
    startButtonText: {
      color: "#F47551",
      fontWeight: "bold",
      alignItems: "center",
      textAlign: "center",
    },
bannerImage: {
      width: 126,
      height: 135,
      marginBottom: -38,},
      notificationPanel: {
        position: "absolute",
        top: 70, // Adjust position based on your layout
        right: 20,
        width: 300,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 5,
        zIndex: 10,
      },
      notificationTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
      },
      notificationItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
      },
      notificationText: {
        fontSize: 14,
        color: "#333",
      },
},
);


