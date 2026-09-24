// Quick test script to verify Gemini API key
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

console.log('Testing Gemini API...');
console.log('API Key present:', apiKey ? 'Yes' : 'No');
console.log('API Key length:', apiKey ? apiKey.length : 0);
console.log('API Key starts with:', apiKey ? apiKey.substring(0, 10) + '...' : 'N/A');

const genAI = new GoogleGenerativeAI(apiKey);

async function testAPI() {
  try {
    // Try with gemini-3.6-flash which is the primary model
    console.log('\nTrying gemini-3.6-flash model...');
    let model = genAI.getGenerativeModel({ model: 'gemini-3.6-flash' });
    
    let result = await model.generateContent('Say "API is working!" in a single sentence.');
    let response = await result.response;
    let text = response.text();
    
    console.log('✅ Success with gemini-3.6-flash! Response:', text);
    console.log('\n✅ Your Gemini API key is working correctly!');
    console.log('✅ Use model: "gemini-3.6-flash" in your code');
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    if (error.status) {
      console.error('Status:', error.status);
    }
    if (error.statusText) {
      console.error('Status Text:', error.statusText);
    }
    if (error.errorDetails) {
      console.error('Error Details:', JSON.stringify(error.errorDetails, null, 2));
    }
  }
}

testAPI();
