const io = require("socket.io")(3001, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

io.on("connection", socket => {
    console.log("Connected");
    socket.on('send-changes', delta => {
        socket.broadcast.emit("receive-changes", delta);
    });
})

console.log("Server is running");