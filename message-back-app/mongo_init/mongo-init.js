db.createUser({
  user: 'messageOwner',
  pwd: 'the_password',
  roles: [
    {
      role: 'dbOwner',
      db: 'message_dev',
    },
  ],
});

