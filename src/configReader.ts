import fs from 'fs/promises';

const CONFIG_PATH = '/config/config.json'; // Kubernetes mounts ConfigMap here

/**
 * Reads the configuration JSON file.
 * @returns Parsed JSON object or error message.
 */
export const readConfig = async () => {
  try {
    const data = await fs.readFile(CONFIG_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading config:', err);
    return { error: 'Config not found or invalid' };
  }
};
