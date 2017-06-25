npm start &
webpack=$!

sleep 15
wdio
result=$?

kill $webpack
exit $result
