import { Deta } from 'deta';

const deta = Deta(process.env.UPTY_DATA_KEY);

const status = deta.Base('status');

async function getStatus() {
  const { items } = await status.fetch();
  return items;
}

export { getStatus };