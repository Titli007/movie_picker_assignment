import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { searchMovies, toggleShortlist } from '../redux/moviesSlice';
import { Movie } from '../types/movie';
import { AppDispatch } from '../redux/store';
import Toast from '../components/Toast';

const SearchScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchQuery, setSearchQuery] = useState('');
  const { movies, loading, shortlistedMovies } = useSelector((state: RootState) => state.movies);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (message: string) => {
    setToastMessage(message);
    setToastVisible(true);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      dispatch(searchMovies(searchQuery.trim()));
    }
  };

  const renderMovie = ({ item }: { item: Movie }) => {
    const isShortlisted = shortlistedMovies.some(m => m.imdbID === item.imdbID);

    return (
      <View style={styles.movieCard}>
        <Image
          source={{ uri: item.Poster !== 'N/A' ? item.Poster : 'https://via.placeholder.com/300x450' }}
          style={styles.poster}
        />
        <View style={styles.movieInfo}>
          <Text style={styles.title}>{item.Title}</Text>
          <Text style={styles.year}>{item.Year}</Text>
          <TouchableOpacity
            style={[styles.shortlistButton, isShortlisted && styles.shortlistButtonActive]}
            onPress={() => dispatch(toggleShortlist(item),
                           showToast(isShortlisted ? 'Removed from shortlist' : 'Added to shortlist'))}
          >
            <Text style={styles.shortlistButtonText}>
              {isShortlisted ? 'Remove from Shortlist' : 'Add to Shortlist'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search movies..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
          placeholderTextColor="#666"
        />
        <TouchableOpacity 
          style={styles.searchButton}
          onPress={handleSearch}
        >
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      
      {loading ? (
        <ActivityIndicator size="large" color="#333" style={styles.loader} />
      ) : (
        <FlatList
          data={movies}
          renderItem={renderMovie}
          keyExtractor={item => item.imdbID}
          contentContainerStyle={styles.movieList}
        />
      )}
      <Toast
  visible={toastVisible}
  message={toastMessage}
  onHide={() => setToastVisible(false)}
/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchButton: {
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieList: {
    paddingBottom: 16,
  },
  movieCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  poster: {
    width: 100,
    height: 150,
  },
  movieInfo: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  year: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  shortlistButton: {
    backgroundColor: '#333',
    padding: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  shortlistButtonActive: {
    backgroundColor: '#666',
  },
  shortlistButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default SearchScreen;