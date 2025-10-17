const DynamicGreeting = () => {
  const userProfile = [
    { username: "Wayne", isPremium: false },
    { username: "Josie", isPremium: true },
    { username: "Charles", isPremium: false },
    { username: "Katy", isPremium: true },
  ];

  const randomIndex = Math.floor(Math.random() * userProfile.length);

  const premiumMessage = (i) =>
    userProfile[i].isPremium
      ? "Thank you for being a premium member!"
      : "Upgrade to premium to enjoy exclusive features!";

  return (
    <div>
      <section className="dynamic-greeting">
        <h1>Welcome back, {userProfile[randomIndex].username}!</h1>

        <h4>{premiumMessage(randomIndex)}</h4>
      </section>
    </div>
  );
};

export default DynamicGreeting;
