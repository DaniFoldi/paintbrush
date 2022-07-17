<template>
  <Container article padded>
    <ContentDoc>
      <template #not-found>
        <Container>
          <Text title>
            404
          </Text>
          <Text>
            The page you are looking for does not exist.
          </Text>
          <AutoLink href="/">
            Go to the homepage
          </AutoLink>
        </Container>
      </template>
      <template #empty>
        <Spinner />
      </template>
    </ContentDoc>
  </Container>
</template>
