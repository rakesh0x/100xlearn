import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

export const AuthHandler = () => {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <Navbar />
      <div style={{ paddingTop: "3em" }}></div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/singleplayer" element={<SinglePlayerLayout />} />
        <Route path="/computerscience" element={<SinglePlayer />} />
        <Route path="/MultiPlayer" element={<MultiPlayerLayout />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/generalknowledge" element={<GeneralKnowledge />} />
      </Routes>
    </Auth0Provider>
  );
}

