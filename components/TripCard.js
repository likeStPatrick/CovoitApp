import { View, Text, StyleSheet } from "react-native";

export default function TripCard({ trip }) {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.route}>
            {trip.departure} → {trip.arrival}
          </Text>
          <Text style={styles.price}>{trip.price} €</Text>
        </View>
        <Text >Places disponibles : {trip.seatsAvailable}</Text>
        <Text >Conducteur : {trip.driver.name}</Text>
        <Text >Départ : {trip.date} à {trip.time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    padding: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  content: {
    padding: 14,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 5,
    elevation: 3,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2,
  },
  route: {
    fontSize: 18,
    fontWeight: "600",
    color: "#161B33",
    marginTop: 8,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#3ED9C4",
  },

});
