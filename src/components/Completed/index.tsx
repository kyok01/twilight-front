export const Completed: React.FC<{ twitterId: string }> = ({ twitterId }) => {
  return (
    <>
      <div className="text-2xl text-primary">Completed!!</div>
      <div className="text-2xl text-success">{`You've got ${twitterId}.twl!`}</div>
    </>
  );
};
