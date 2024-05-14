import {db} from '../db/config.ts'; 
import user from "./User.ts"; 
import card from "./Card.ts";  
import deck from "./Deck.ts"; 
import attack from "./Attack.ts";

user.hasOne(deck)
deck.belongsTo(user)

deck.hasMany(card)
card.belongsTo(deck)

card.hasMany(attack)
attack.hasMany(card)

//TODO Tests

// Export Models
export default { user, deck, attack, card };