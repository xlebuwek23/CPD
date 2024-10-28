// app/Work1.js
import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const Work1 = () => {
    const [isExpanded, setIsExpanded] = useState(false); // состояние для управления видимостью дополнительного текста

    const handleReadMore = () => {
        setIsExpanded(!isExpanded); // переключаем состояние
    };

    return (
        <View style={styles.cardContainer}>
            {/* Фотография */}
            <Image
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoRGyXmHy_6aIgXYqWHdOT3KjfmnuSyxypw&s' }} // замените URL на ваш
                style={styles.image}
            />
            {/* Заголовок */}
            <Text style={styles.title}>Заголовок статьи</Text>
            {/* Описание */}
            <Text style={styles.description}>
                Это небольшое описание статьи. Здесь вы можете кратко изложить суть материала.
            </Text>
            {/* Кнопка "Читать далее" */}
            <Button title={isExpanded ? "Скрыть" : "Читать далее"} onPress={handleReadMore} />
            {/* Дополнительный текст */}
            {isExpanded && (
                <Text style={styles.additionalText}>
                    Здесь находится дополнительный текст статьи, который можно показать или скрыть по желанию.
                </Text>
            )}
        </View>
    );
};

// Стили для компонентов
const styles = StyleSheet.create({
    cardContainer: {
        width: '20%', // Ширина карточки
        backgroundColor: '#ffffff', // Цвет фона карточки
        borderRadius: 10, // Закругленные углы
        padding: 20, // Внутренние отступы
        shadowColor: '#000', // Цвет тени
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2, // Прозрачность тени
        shadowRadius: 4, // Радиус размытия тени
        elevation: 5, // Для Android
        marginBottom: 20, // Отступ снизу
        alignSelf: 'center', // Центрирование карточки по горизонтали
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
    },
    additionalText: {
        marginTop: 10,
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Work1;
