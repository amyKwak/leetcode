// Design Chess

// system requirements
// 1. should support two online players to play a game
// 2. each player will be randomly assigned a side, black or white
// 3. players will take turns making moves, white player starts first
// 4. board is a 8x8 grid, each player starts with 8 pawns, 2 rooks, 2 knights, 2 bishops, 1 queen, 1 king. 
// 5. the game will finish if either is in a checkmate, a player forfeits, or a draw



function maxTickets(tickets) {
  tickets.sort((a, b) => a - b);
  
  let maxSubArr = [], maxLength = 0;
  for (let i = 1; i < tickets.length; i++) {
      if (Math.abs(tickets[i] - tickets[i - 1] <= 1)) {
          if (maxSubArr.length === 0) {
              maxSubArr.push(tickets[i - 1])
          }
          maxSubArr.push(tickets[i]);
      } else {
          maxSubArr = [];
      }
      maxLength = Math.max(maxSubArr.length, maxLength);
  }
  return maxLength;

}