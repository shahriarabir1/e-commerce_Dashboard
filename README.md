# e-commerce_Dashboard
#only can use the collaborator of this projects and must be claim copy right issue if anyone follow this
for using jwt token there is creating a problem that if there created jwtverification in front end part there created a problem there not goes token if I send it to header.There needed to give headers like this
 headers: {
        Authorization: `bearer${JSON.parse(user).token}`,
      },
