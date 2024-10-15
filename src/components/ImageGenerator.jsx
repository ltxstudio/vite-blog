import { useState } from 'react';
import { OpenAIApi, Configuration } from 'openai';

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState('');

  const generateImage = async () => {
    const configuration = new Configuration({ apiKey: 'your-api-key' });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createImage({
      prompt,
      n: 1,
      size: '512x512'
    });

    setImage(response.data.data[0].url);
  };

  return (
    <div>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="border p-2 m-2"
        placeholder="Enter prompt"
      />
      <button onClick={generateImage} className="bg-blue-500 text-white p-2">Generate Image</button>
      {image && <img src={image} alt="Generated" className="mt-4" />}
    </div>
  );
};

export default ImageGenerator;
