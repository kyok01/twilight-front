export const Completed: React.FC<{ twitterId: string }> = ({ twitterId }) => {
  return (
    <>
      <div className="text-2xl text-primary">Completed!!</div>
      <div className="text-2xl text-success">{`He or She's got ${twitterId}.ppw!`}</div>
    </>
  );
};
