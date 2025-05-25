// app/(tabs)/game.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { useTheme } from '../../context/ThemeContext';

function generateSecretNumber(): string {
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let number = '';
    for (let i = digits.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [digits[i], digits[j]] = [digits[j], digits[i]];
    }
    for (let i = 0; i < 4; i++) {
        number += digits[i].toString();
    }
    return number;
}

interface GuessResult {
    guess: string;
    bulls: number;
    cows: number;
}

export default function GameScreen() {
    // const { colors } = useTheme(); // Descomente para usar o tema

    const [secretNumber, setSecretNumber] = useState<string>('');
    const [currentGuess, setCurrentGuess] = useState<string>('');
    const [attempts, setAttempts] = useState<number>(0);
    const [guessesList, setGuessesList] = useState<GuessResult[]>([]);
    const [feedbackMessage, setFeedbackMessage] = useState<string>('');
    const [gameOver, setGameOver] = useState<boolean>(false);
    const maxAttempts = 10;

    const resetGame = useCallback(() => {
        setSecretNumber(generateSecretNumber());
        setAttempts(0);
        setGuessesList([]);
        setCurrentGuess('');
        setFeedbackMessage('');
        setGameOver(false);
    }, []);

    useEffect(() => {
        resetGame();
    }, [resetGame]);

    const validateGuess = (guess: string): boolean => {
        if (guess.length !== 4) {
            setFeedbackMessage('Por favor, digite um número de 4 dígitos.');
            return false;
        }
        if (!/^\d+$/.test(guess)) {
            setFeedbackMessage('Por favor, digite apenas números.');
            return false;
        }
        const uniqueDigits = new Set(guess.split(''));
        if (uniqueDigits.size !== 4) {
            setFeedbackMessage('O número não pode ter dígitos repetidos.');
            return false;
        }
        setFeedbackMessage('');
        return true;
    };

    const calculateBullsAndCows = (guess: string): { bulls: number; cows: number } => {
        let bulls = 0;
        let cows = 0;
        for (let i = 0; i < 4; i++) {
            if (guess[i] === secretNumber[i]) {
                bulls++;
            } else if (secretNumber.includes(guess[i])) {
                cows++;
            }
        }
        return { bulls, cows };
    };

    const handleGuess = () => {
        if (gameOver || !validateGuess(currentGuess)) {
            return;
        }

        const newAttempts = attempts + 1;
        setAttempts(newAttempts);
        const { bulls, cows } = calculateBullsAndCows(currentGuess);

        setGuessesList(prevGuesses => [{ guess: currentGuess, bulls, cows }, ...prevGuesses]);
        setCurrentGuess('');

        if (bulls === 4) {
            Alert.alert("Parabéns!", `Você acertou em ${newAttempts} tentativas!`, [{ text: "Jogar Novamente", onPress: resetGame }]);
            setGameOver(true);
            return;
        }

        if (newAttempts >= maxAttempts) {
            Alert.alert("Fim de Jogo!", `Você não conseguiu adivinhar. O número era ${secretNumber}.`, [{ text: "Jogar Novamente", onPress: resetGame }]);
            setGameOver(true);
        }
    };

    const revealSecret = () => {
        Alert.alert("Número Secreto", `O número secreto é: ${secretNumber}`);
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Text style={styles.title}>Adivinhe o Número</Text>
            <Text style={styles.instructions}>Tente adivinhar o número secreto de 4 dígitos (sem repetição).</Text>

            <TextInput
                style={styles.input}
                keyboardType="number-pad"
                maxLength={4}
                value={currentGuess}
                onChangeText={setCurrentGuess}
                placeholder="Seu palpite"
                editable={!gameOver}
            />
            {feedbackMessage ? <Text style={styles.feedback}>{feedbackMessage}</Text> : null}

            <View style={styles.buttonContainer}>
                <Button title="Adivinhar" onPress={handleGuess} disabled={gameOver || currentGuess.length !== 4} />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Revelar Número" onPress={revealSecret} color="#f39c12" />
            </View>
            <View style={styles.buttonContainer}>
                 <Button title="Novo Jogo" onPress={resetGame} color="#e74c3c" />
            </View>


            <Text style={styles.attemptsText}>Tentativas: {attempts} / {maxAttempts}</Text>

            <Text style={styles.historyTitle}>Histórico de Palpites:</Text>
            {guessesList.length === 0 && <Text style={styles.noGuessesText}>Nenhum palpite ainda.</Text>}
            {guessesList.map((item, index) => (
                <View key={index} style={styles.guessItem}>
                    <Text style={styles.guessItemText}>Palpite: {item.guess}</Text>
                    <Text style={styles.guessItemText}>Touros: {item.bulls}, Vacas: {item.cows}</Text>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    instructions: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        fontSize: 18,
        textAlign: 'center',
        borderRadius: 5,
    },
    feedback: {
        color: 'red',
        marginBottom: 10,
    },
    buttonContainer: {
        width: '80%',
        marginBottom: 10,
        borderRadius: 5,
        overflow: 'hidden',
    },
    attemptsText: {
        fontSize: 16,
        marginVertical: 15,
    },
    historyTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
    },
    noGuessesText: {
        fontStyle: 'italic',
    },
    guessItem: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        marginBottom: 8,
        width: '90%',
        borderWidth: 1,
        borderColor: '#eee',
    },
    guessItemText: {
        fontSize: 16,
    }
});