import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const li = [];
  for (const i of [19, 20, 34]) {
    li.push(new ClassRoom(i));
  }
  return li;
}
