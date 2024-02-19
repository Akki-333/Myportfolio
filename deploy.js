import push from 'git-push';

const remote = {
  name: 'production',
  url: 'https://github.com/Akki-333/Myportfolio',
  branch: 'gh-pages'
};

export default async () => {
  await build();
  await new Promise(resolve => push('./build', remote, resolve));
};