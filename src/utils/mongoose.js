import mongoose, { connect, connection }  from 'mongoose';

const conn = {
    isConnected: false
}

export async function connectDB() {
    if(conn.isConnected) return;
    
    const db = await mongoose.connect(process.env.URLMONGODB)

    console.log(db.connection.db.databaseName);
    conn.isConnected = db.connections[0].readyState
}

connection.on('connected', () => {
    console.log('Moongose is connection');
})

connection.on('error', (err) => {
    console.log('moongose connection error', err);
})
