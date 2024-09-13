import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // *Cria usuário
  const user = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice2@prisma.io',
    },
  })
  console.log(user);
  

  // *Lista usuário
  // const users = await prisma.user.findMany({
  //   orderBy: {name: "asc"},
  // })
  // console.log(users);

  // *Lista usuários onde email começa com "ali*"
  // const users = await prisma.user.findMany({
  //   where: {
  //     email: {
  //       startsWith: "ali"
  //     }
  //   }
  // })
  // console.log(users);

  // *Encontra somente um usuário
  // const user = await prisma.user.findUnique({
  //   where: {
  //     id: 1,
  //   }
  // })
  // console.log(user);

  // *Cria usuário e posts junto
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Bob',
  //     email: 'bob@prisma.io',
  //     posts: {create: [{
  //       title: "Something",
  //       content: "Message",
  //     }]},
  //   },
  //   include: {
  //     posts: true,
  //   }
  // })
  // console.log(user);

  // *Cria um post e conecta a um usuário existente
  // const post = await prisma.post.create({
  //   data: {
  //     title: "New Post",
  //     content: "Content",
  //     published: true,
  //     author: {
  //       connect: {
  //         email: "bob@prisma.io"
  //       }
  //     }
  //   }
  // })
  // console.log(post);
  
  // *Query users with posts
  // const users = await prisma.user.findMany({
  //   include: {
  //     posts: {
  //       select: {
  //         title: true,
  //         content: true,
  //       },
  //     }
  //   }
  // })
  // console.log(JSON.stringify(users));

  // *Query only users that posted something
  // const users = await prisma.user.findMany({
  //   where: {
  //     posts:{
  //       /**
  //        * some: Que pelo menos um registro segue a condição.
  //        * every: Todos registros devem seguir a condição.
  //        * none: Nenhum registro deve seguir a condição.
  //        */
  //       some: {
  //         published: false
  //       }
  //     }
  //   },
  //   include: {
  //     posts: true
  //   }
  // })
  // console.log(users);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })