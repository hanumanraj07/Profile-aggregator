const axios = require("axios");

async function getGithub(username) {
  if (!username) return null;

  const endpoint = `https://api.github.com/users/${username}`;
  const { data } = await axios.get(endpoint, {
    timeout: 10000,
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "dev-profile-aggregator"
    }
  });

  return {
    username: data.login || username,
    profileUrl: data.html_url || "",
    avatar: data.avatar_url || "",
    name: data.name || data.login || "",
    bio: data.bio || "",
    publicRepos: Number(data.public_repos || 0),
    followers: Number(data.followers || 0),
    following: Number(data.following || 0),
    publicGists: Number(data.public_gists || 0),
    contributionGraph: `https://github-readme-streak-stats.herokuapp.com/?user=${
      data.login || username
    }&theme=dark&hide_border=true`,
    lastSynced: new Date()
  };
}

module.exports = { getGithub };
