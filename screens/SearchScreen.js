import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'
import { useState } from 'react'

export default function SearchScreen() {
    const [searchApi,results,errorMessage] = useResults()
    const [term, setTerm] = useState("")

    const filterPrice = (price) => {
      const filteredResults = results.filter((result) => {
          return result.price === price;
      });
      return filteredResults;
  };
  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={()=> searchApi(term)} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {results.length == 0? <></> : <>
        <ResultsList title="Ucuz" results={filterPrice("₺")} />
        <ResultsList title="Orta" results={filterPrice("₺₺")} />
        <ResultsList title="Pahalı" results={filterPrice("₺₺₺")} />
        </>
      }
      
    </View>
  )
}

const styles = StyleSheet.create({})