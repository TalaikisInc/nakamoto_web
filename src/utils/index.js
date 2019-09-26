import { faUserSecret, faKey, faLock, faPlusCircle, faPaperPlane, faList } from '@fortawesome/free-solid-svg-icons'

export const feats = [
  {
    id: 0,
    title: 'Control your privacy',
    text: 'We don\'t save your account(s) on any central database or track your actions (only paid version).',
    icon: faUserSecret
  },
  {
    id: 1,
    title: 'Control your keys',
    text: 'Your keys are double encrypted and saved only on your device. You can import, create or delete new keys anytime. Paid version has paper export and import features.',
    icon: faKey
  },
  {
    id: 2,
    title: 'Feel safe',
    text: 'Double encryption of all keys, only one time export, needs online access only when sending transaction (cold wallet).',
    icon: faLock
  },
  {
    id: 3,
    title: 'Easy new accounts (HD Wallet)',
    text: 'Generate unlimited new accounts with one click from your main seed. It is recommended to have new account for each new transaction.',
    icon: faPlusCircle
  },
  {
    id: 4,
    title: 'Easy transactions',
    text: 'Send Ether and tokens between app wallets just by scanning the QR code.',
    icon: faPaperPlane
  },
  {
    id: 5,
    title: 'Easily test on Ethereum Test Networks',
    text: 'Test transactions on Ropsten, Kovan, Gorli or Rinkeby test networks.',
    icon: faList
  }
]
