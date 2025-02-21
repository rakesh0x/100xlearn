import { Auth0Provider } from '@auth0/auth0-react';

const domain = import.meta.env.REACT_APP_AUTH0_DOMAIN;
const clientId = import.meta.env.REACT_APP_AUTH0_CLIENT_ID;

export const AuthHandler = () => {

  const IfAuthticated = () => {
    const {  isAuthenticated } = useAuth0();
    {
      isAuthenticated ? (
        <LandingPage/>
      ) : (
        <LoginForm/>
      )

    }
  }

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