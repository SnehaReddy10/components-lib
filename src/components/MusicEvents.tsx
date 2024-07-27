import { TicketIcon } from 'lucide-react';
import { MusicEventsData } from '../static/MusicEvents';
import { useState } from 'react';

const colors: any = {
  0: 'yellow-100',
  1: 'orange-100',
  2: 'red-100',
  3: 'blue-100',
  4: 'pink-100',
};

function MusicEvents() {
  console.log('state changed');
  const [musicEvents, setMusicEvents] = useState(MusicEventsData);

  console.log(musicEvents);
  const reorderMusicEvents = (musicEvents: any) => {
    setMusicEvents(musicEvents);
  };

  return (
    <div className="h-full w-full bg-blue-100 text-black py-14 lg:px-56">
      <h4 className="font-bold text-2xl">Music Events</h4>
      <p className="text-xs font-semibold">in London, United Kingdom</p>
      <div className="py-4">
        {musicEvents.map((x: any) => (
          <Event
            key={x.id}
            event={x}
            musicEvents={musicEvents}
            setMusicEvents={reorderMusicEvents}
          />
        ))}
      </div>
    </div>
  );
}

function Event({ event, musicEvents, setMusicEvents }: any) {
  let { id, date, title, description, totalTickets, ticketsSoldOut } = event;
  const isSoldOut = totalTickets == ticketsSoldOut;

  const onDragOver = (e: any) => {
    e.preventDefault();
  };

  const onDragStart = (e: any, id: number) => {
    e.dataTransfer.setData('id', id);
  };

  const onDrop = (e: any, id: number) => {
    const previousId = e.dataTransfer.getData('id');

    const previousIndex = musicEvents.findIndex((x: any) => x.id == previousId);
    const currentIndex = musicEvents.findIndex((x: any) => x.id == id);

    setMusicEvents((x: any) =>
      x.map((x: any, i: number) => {
        console.log(i, previousIndex, currentIndex);
        if (i == previousIndex) {
          return musicEvents[currentIndex];
        } else if (i == currentIndex) {
          return musicEvents[previousIndex];
        }
        return x;
      })
    );
  };

  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, id)}
      onDragOver={(e) => {
        onDragOver(e);
      }}
      onDrop={(e) => onDrop(e, id)}
      className="bg-white w-full flex justify-between gap-2 rounded-md my-2 p-2"
    >
      <div
        className={`bg-${
          colors[(id + 5) % 5]
        } w-24 p-1 m-1 flex flex-col justify-center items-center rounded-md`}
      >
        <p className="text-[0.65rem] font-semibold">
          {date.getDate()} {date.toLocaleString('default', { month: 'long' })}
        </p>
        <p className="text-xl font-bold">
          {date.getHours()}:{date.getMinutes()}
        </p>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-1">
          <h5 className="font-bold">{title}</h5>
          <p className="text-xs line-clamp-2 w-[40vw]">{description}</p>
        </div>
        <div className="flex font-semibold w-36 justify-center items-center text-xs">
          <div
            className={`flex gap-1 ${
              isSoldOut
                ? ''
                : 'bg-black hover:bg-gray-800 rounded-lg px-4 py-2 text-white'
            }`}
          >
            {!isSoldOut && <TicketIcon fill="white" />}
            <button>{isSoldOut ? 'Sold out!' : 'Buy a Ticket'}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicEvents;
