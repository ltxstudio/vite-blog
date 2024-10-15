import { useState } from 'react';
import { OpenAIApi, Configuration } from 'openai';

const CodeWriter = () => {
  const [prompt, setPrompt] = useState('');
  const [code, setCode] = useState('');

  const generateCode = async () => {
    const configuration = new Configuration({ apiKey: 'your-api-key' });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
      model: 'text-davinci-002',
      prompt,
      max_tokens: 150,
    });

    setCode(response.data.choices[0].text);
  };

  return (
    <div>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="border p-2 m-2"
        placeholder="Enter code prompt"
      />
      <button onClick={generateCode} className="bg-green-500 text-white p-2">Generate Code</button>
      <pre className="mt-4 bg-gray-100 p-4">{code}</pre>
    </div>
  );
};

export default CodeWriter;
