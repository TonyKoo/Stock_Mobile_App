import React, { useEffect, useState } from "react";
import { StyleSheet, Text, SafeAreaView, Button } from "react-native";
import finnhub from "../api/finnhub";
import SearchBar from "../components/SearchBar";
import ShowList from "../components/ShowList";
import Logout from "../components/Logout";

import firebase from "../firebase";

export default function Home({ navigation }) {
  const API_KEY = ""; //Add HERE your API-Key

  const [stocks, setStocks] = useState([]);
  const [query, setQuery] = useState("");

  const searchAPI = async () => {
    console.log("CALLING API");
    const response = await finnhub.get(
      "/stock/symbol?exchange=US&token=" + API_KEY,
      {}
    );
    setStocks(response.data);
  };

  useEffect(() => {
    searchAPI();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>TEST</Text> */}
      <SearchBar
        query={query}
        onQueryChange={newQuery => {
          setQuery(newQuery);
        }}
      />
      <ShowList
        navigation={navigation}
        stocks={stocks.filter(
          stock =>
            stock.symbol.toUpperCase().includes(query.toUpperCase()) ||
            stock.description.toUpperCase().includes(query.toUpperCase())
        )}
      />
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      <Button
        title="Portfolio"
        onPress={() => navigation.navigate("Portfolio")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
