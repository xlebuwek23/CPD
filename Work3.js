// app/Work3.js
import React, { useState } from 'react';
import { View, Text, ScrollView, Button, TextInput } from 'react-native';
import styles from './styles'; // Импортируем стили

const Work3 = () => {
    const [buttonText, setButtonText] = useState("Первоначальный текст");
    const [inputText, setInputText] = useState("");

    // Список текстов для кнопки
    const texts = [
        "Первоначальный текст",
        "Текст изменен на 1",
        "Текст изменен на 2",
        "Текст изменен на 3",
    ];

    // Индекс текущего текста
    const [currentIndex, setCurrentIndex] = useState(0);

    // Обработчик изменения текста кнопки
    const changeText = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length); // Изменяем индекс
        setButtonText(texts[currentIndex]); // Устанавливаем текст по текущему индексу
    };

    return (
        <View style={styles.container}>
            {/* Контейнер для карточек с горизонтальной прокруткой */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                {/* Первый компонент: Скроллируемая карточка */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Скроллируемая карточка</Text>
                    <ScrollView style={styles.cardContentScroll} contentContainerStyle={styles.cardContent}>
                        <Text>
                            Это пример текста, который можно скроллить.
                            Добавьте здесь больше текста, чтобы увидеть, как карточка будет прокручиваться.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus, nisl vel tincidunt efficitur,
                            orci erat viverra magna, sed consectetur mi dolor id nisi.
                        </Text>
                    </ScrollView>
                </View>

                {/* Вторая часть: Горизонтальная карточка с текстом и кнопкой */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Изменяемая карточка</Text>
                    <Text style={styles.buttonText}>{buttonText}</Text>
                    <Button title="Изменить текст" onPress={changeText} />
                </View>

                {/* Третий компонент: Карточка для ввода текста */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Карточка с вводимым текстом</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Введите текст"
                        value={inputText}
                        onChangeText={setInputText}
                    />
                    <Text style={styles.inputText}>{inputText}</Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default Work3;
