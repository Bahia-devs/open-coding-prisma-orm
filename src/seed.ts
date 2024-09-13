import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      name: 'Bob',
      email: 'bob@prisma.io',
      posts: {create: [{
        title: "Title bob",
        content: "Bob's message",
      }]},
    }
  })
  
  await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
      posts: {create: [
        {
          title: "Title Alice",
          content: "Alice's message",
        },
        {
          title: "Title Alice 2",
          content: "Alice's message 2",
        }
    ]},
    }
  })

    await prisma.user.create({
    data: {
      name: 'John',
      email: 'john@prisma.io',
      posts: {create: [
        {
          title: "Title John",
          content: "John's message",
        },
        {
          title: "Title John 2",
          content: "John's message 2",
        }
    ]},
    }
  })
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