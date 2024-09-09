import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Platform, Pressable } from 'react-native';

const getTypeDetails = (type :any ) => {
    if (typeof type !== 'string') {
        return { borderColor: "#A0A0A0", emoji: "❓" };
    }

    switch (type.toLowerCase()) {
        case "electric":
            return { borderColor: "#FFD700", emoji: "⚡️" };
        case "water":
            return { borderColor: "#6493EA", emoji: "💧" };
        case "fire":
            return { borderColor: "#FF5733", emoji: "🔥" };
        case "grass":
            return { borderColor: "#66CC66", emoji: "🌿" };
        default:
            return { borderColor: "#A0A0A0", emoji: "❓" };
    }
};


const PokemonCard = (props   :any    ) => {
    const { name, image, type, hp, moves = [], weaknesses = [] } = props.data;
    const  name1 = props.data.name ?  props.data.name : "Unamed "
    const { borderColor, emoji } = getTypeDetails(type);
    const [IsHovered ,setIsHovered] = useState(true);
   
    return (
        <ScrollView>
            <View style={styles.card}>
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.hp}>❤️HP: {hp}</Text>
                </View>
                <Image
                    source={image}
                    accessibilityLabel={`${name} Pokemon`}
                    style={styles.image}
                    resizeMode="contain"
                />
                        <Pressable
                                onHoverIn={() => setIsHovered(true)}
                                onHoverOut={() => setIsHovered(false)}
                            >
                            <View style={styles.typeContainer  }>
                                <View style={[styles.badge, { borderColor } ,IsHovered ?  styles.badge : styles.badgeHoverd]}>
                                    <Text style={styles.typeEmoji}>{emoji}</Text>
                                    <Text style={styles.typeText}>{type}</Text>
                                </View>
                            </View>
                        </Pressable>
                        <View style={styles.movesContainer}>
                            <Text style={styles.movesText}>Moves: {moves.join(", ")}</Text>
                        </View>
                <View style={styles.weaknessContainer}>
                    <Text style={styles.weaknessText}>Weakness: {weaknesses.join(", ")}</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios: {
                shadowOffset: { width: 2, height: 2 },
                shadowColor: "#333",
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    nameContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 32,
    },
    name: {
        fontSize: 30,
        fontWeight: "bold",
    },
    hp: {
        fontSize: 22,
    },
    image: {
        width: "100%",
        height: 200,
        marginBottom: 16,
    },
    typeContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 40,
    },
    badge: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 4,
    },
    badgeHoverd: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        backgroundColor: "#ddd", // E
    },
    typeEmoji: {
        fontSize: 30,
        marginRight: 12,
    },
    typeText: {
        fontSize: 22,
        fontWeight: "bold",
    },
    movesContainer: {
        marginBottom: 12,
    },
    movesText: {
        fontSize: 22,
        fontWeight: "bold",
    },
    weaknessContainer: {
        marginBottom: 8,
    },
    weaknessText: {
        fontSize: 22,
        fontWeight: "bold",
    },
});

export default PokemonCard;

`Source: src/views/account/index.js`