import { CopyIcon } from 'lucide-react';
import { useState } from 'react';
import { Toaster, toast } from 'sonner';

function Copy() {
  const [text, setText] = useState('');

  const handleCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success('Copied');
      })
      .catch((err: any) => {
        toast.error('Failed to copy!');
        console.log('Error while copying content', err);
      });
  };

  return (
    <div className="w-full h-screen flex gap-10 justify-center items-center">
      <div className="flex flex-col gap-5">
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="Text"
          className="text-purple-800 px-2 py-1 rounded-md"
        />{' '}
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="Text"
          className="text-purple-800 px-2 py-1 rounded-md"
        />
      </div>
      <CopyIcon
        onClick={handleCopy}
        className="hover:fill-white transition-all ease-in-out"
      />
      <Toaster richColors={true} position="top-right" />
    </div>
  );
}

export default Copy;
