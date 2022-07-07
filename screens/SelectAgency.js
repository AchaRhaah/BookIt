import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faStreetView,
  faLocationDot,
  faCalendarDays,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Ticket from "../components/Ticket";

export default function SelectAgency() {
  return (
    <View style={styles.main1}>
      <ScrollView>
        <View style={styles.main2}>
          <Text style={styles.heading}>Bamenda - Buea</Text>
        </View>
        <View style={styles.ticketContainer}>
          <Ticket
            agency={"Mogamo"}
            destination={"Buea"}
            departure={"Bamenda"}
            date={"01-Oct-2022"}
            price={"6000"}
            timeOfDay={"Night"}
          />
          <Ticket
            agency={"Nso Boys"}
            destination={"Yaounde"}
            departure={"Douala"}
            date={"04-July-2022"}
            price={"5500"}
            timeOfDay={"Night"}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  main2: {
    backgroundColor: "#003049",
    width: "100%",
    height: "23%",
    justifyContent: "center",
    borderBottomRightRadius: 500,
    marginBottom: 90,
  },
  main1: {
    // marginTop: 170,
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    // marginRight: 12,
    // borderTopLeftRadius: 53,
    // borderTopRightRadius: 53,
    justifyContent: "center",
    // alignItems: "center",
  },
  heading: {
    color: "red",
    fontSize: 30,
    marginTop: 200,
    // marginBottom: 20,
  },
});
