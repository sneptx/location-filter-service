const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

const { isWithin50MileRadiusOfLondon } = require('./utils');

app.get('/users', async (req, res) => {
  const idsOfUsersInOrNearLondon = [];
  const usersLivingInLondon = [];
  const usersWithin50MilesOfLondon = [];

  const usersListedAsLivingInLondonResponse = await axios.get('https://bpdts-test-app.herokuapp.com/city/London/users');
  usersListedAsLivingInLondonResponse.data.forEach((user) => {
    idsOfUsersInOrNearLondon.push(user.id);
    usersLivingInLondon.push(user);
  });

  const allUsersResponse = await axios.get('https://bpdts-test-app.herokuapp.com/users');

  allUsersResponse.data
    .forEach((user) => {
      const userLocation = {
        latitude: user.latitude,
        longitude: user.longitude,
      };

      const isWithin50MilesOfLondon = isWithin50MileRadiusOfLondon(userLocation);

      if (isWithin50MilesOfLondon && !idsOfUsersInOrNearLondon.includes(user.id)) {
        idsOfUsersInOrNearLondon.push(user.id);
        usersWithin50MilesOfLondon.push(user);
      }
    });

  res.send([
    ...usersLivingInLondon,
    ...usersWithin50MilesOfLondon,
  ].sort((a, b) => a.id - b.id));
});

app.listen(port, () => {
  console.log(`location-filter-service listening at http://localhost:${port}`);
});
