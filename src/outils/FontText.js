import { StyleSheet } from 'react-native';

const FontText = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50', // Couleur verte par défaut
    textAlign: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFF',
    textAlign: 'center',
  },
  normalText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
  subtitleText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FBC02D',
    marginBottom: 8,
  },
  smallText: {
    fontSize: 14,
    color: '#555',
  },
  linkText: {
    fontSize: 16,
    color: '#FFC107',
    textDecorationLine: 'underline',
  },
  alertText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F44336',
  },
});

export default FontText;
