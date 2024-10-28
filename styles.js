// app/styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center', // Центрирование содержимого
        alignItems: 'center', // Центрирование по горизонтали
    },
    scrollContainer: {
        flexDirection: 'row', // Расположение элементов в строку
        justifyContent: 'center', // Центрирование карточек
        alignItems: 'center', // Центрирование карточек по вертикали
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        margin: 10, // Отступы между карточками
        elevation: 3,
        width: 200, // Фиксированная ширина для карточек
        height: 300,
        justifyContent: 'center', // Центрирование содержимого внутри карточки
        alignItems: 'center', // Центрирование содержимого внутри карточки
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardContent: {
        fontSize: 16,
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        width: '100%', // Устанавливаем ширину на 100%
    },
    containerBox: {
        flex: 1,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        padding: 10,
        borderRadius: 5,
        minWidth: 80, // Устанавливаем минимальную ширину для контейнеров
    },
    buttonText: {
        marginTop: 10,
        fontSize: 16,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: '100%', // Устанавливаем ширину на 100%
    },
    inputText: {
        fontSize: 16,
        marginTop: 10,
    },
});

export default styles;
