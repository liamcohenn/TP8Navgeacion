import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 30,
    backgroundColor: '#1e1e1e',
  },
  text: {
    fontSize: 16,
    color: '#f5f5f5',
    marginVertical: 8,
    textAlign: 'left',
  },
  input: {
    borderWidth: 0,
    backgroundColor: '#2c2c2c',
    color: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 15,
    width: '100%',
    marginBottom: 15,
    borderRadius: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#ff5722',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});