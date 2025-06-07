import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
app.get('/api/jokes', (req, res) => {

    const jokes = [{ "type": "general", "setup": "Why do bees have sticky hair?", "punchline": "Because they use honey combs!", "id": 342 }, { "type": "programming", "setup": "A user interface is like a joke.", "punchline": "If you have to explain it then it is not that good.", "id": 59 }, { "type": "general", "setup": "Why did the house go to the doctor?", "punchline": "It was having window panes.", "id": 326 }, { "type": "general", "setup": "What do you call a laughing motorcycle?", "punchline": "A Yamahahahaha.", "id": 20 }, { "type": "general", "setup": "What do you call a singing Laptop?", "punchline": "A Dell", "id": 7 }, { "type": "general", "setup": "Did you hear about the chameleon who couldn't change color?", "punchline": "They had a reptile dysfunction.", "id": 85 }, { "type": "general", "setup": "What did Michael Jackson name his denim store?", "punchline": "Billy Jeans!", "id": 159 }, { "type": "general", "setup": "Due to complaints, Hawaii passed a law where you're not allowed to laugh above a certain decibel.", "punchline": "You can only use a low ha.", "id": 403 }, { "type": "programming", "setup": "What do you get when you cross a React developer with a mathematician?", "punchline": "A function component.", "id": 412 }]
    res.send({ jokes });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});