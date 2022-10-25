"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[787],{84160:e=>{e.exports=JSON.parse('{"functions":[{"name":"_start","desc":"Starts the internal processes for ClientBridge.","params":[],"returns":[],"function_type":"static","ignore":true,"source":{"line":101,"path":"src/ClientBridge.lua"}},{"name":"Fire","desc":"The equivalent of :FireServer().\\n\\n```lua\\nlocal Bridge = BridgeNet.CreateBridge(\\"Remote\\")\\n\\nBridge:Fire(\\"Hello\\", \\"world!\\")\\n```","params":[{"name":"...","desc":"","lua_type":"any"}],"returns":[],"function_type":"method","source":{"line":331,"path":"src/ClientBridge.lua"}},{"name":"InvokeServerAsync","desc":"Invokes the server for a response. Promise wrapper over :InvokeServerAsync()\\n\\n```lua\\nlocal Bridge = BridgeNet.CreateBridge(\\"Remote\\")\\n\\nlocal data = Bridge:InvokeServerAsync(\\"whats 2+2?\\")\\nprint(data) -- prints \\"4\\"\\n```","params":[{"name":"...","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"...any"}],"function_type":"method","source":{"line":356,"path":"src/ClientBridge.lua"}},{"name":"Connect","desc":"Creates a connection. Can be disconnected using :Disconnect().\\n\\n```lua\\nlocal Bridge = BridgeNet.CreateBridge(\\"Remote\\")\\n\\nBridge:Connect(function(text)\\n\\tprint(text)\\nend)\\n```","params":[{"name":"func","desc":"","lua_type":"function"}],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":396,"path":"src/ClientBridge.lua"}},{"name":"Once","desc":"Creates a connection, when fired it will disconnect.\\n\\n```lua\\nlocal Bridge = BridgeNet.CreateBridge(\\"ConstantlyFiringText\\")\\n\\nBridge:Connect(function(text)\\n\\tprint(text) -- Fires multiple times\\nend)\\n\\nBridge:Once(function(text)\\n\\tprint(text) -- Fires once\\nend)\\n```","params":[{"name":"func","desc":"","lua_type":"function"}],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":440,"path":"src/ClientBridge.lua"}},{"name":"SetReplicationRate","desc":"Sets the rate of which the Bridge sends and receives data.","params":[{"name":"replRate","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":455,"path":"src/ClientBridge.lua"}},{"name":"SetOutboundMiddleware","desc":"Sets the Bridge\'s outbound middleware functions. Any function which returns nil will drop the sequence completely. Overrides existing middleware.\\n\\nA more comprehensive guide on middleware will be coming soon.\\n```lua\\nObject:SetOutboundMiddleware({\\n\\tfunction(plr, ...) -- Called first\\n\\t\\treturn ...\\n\\tend,\\n\\tfunction(plr, ...) -- Called second\\n\\t\\tprint(\\"1\\")\\n\\t\\treturn ...\\n\\tend,\\n\\tfunction(plr, ...) -- Called third\\n\\t\\tprint(\\"2\\")\\n\\t\\treturn ...\\n\\tend,\\n})\\n```","params":[{"name":"middlewareTbl","desc":"","lua_type":"{ (...any) -> nil }"}],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":483,"path":"src/ClientBridge.lua"}},{"name":"SetInboundMiddleware","desc":"Sets the Bridge\'s inbound middleware functions. Any function which returns nil will drop the remote request completely. Overrides existing middleware.\\n\\nAllows you to change arguments or drop remote calls.\\n\\nA more comprehensive guide on middleware will be coming soon.\\n```lua\\nObject:SetInboundMiddleware({\\n\\tfunction(...) -- Called first\\n\\t\\treturn ...\\n\\tend,\\n\\tfunction(...) -- Called second\\n\\t\\tprint(\\"1\\")\\n\\t\\treturn ...\\n\\tend,\\n\\tfunction(...) -- Called third\\n\\t\\tprint(\\"2\\")\\n\\t\\treturn ...\\n\\tend,\\n})\\n```","params":[{"name":"middlewareTbl","desc":"","lua_type":"{ (...any) -> nil }"}],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":513,"path":"src/ClientBridge.lua"}},{"name":"SetNilAllowed","desc":"Allows nil parameters to be passed through without any weirdness. Does have a performance cost- this is off by default.","params":[{"name":"allowed","desc":"","lua_type":"boolean"}],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":524,"path":"src/ClientBridge.lua"}},{"name":"Destroy","desc":"Destroys the ClientBridge object. Doesn\'t destroy the RemoteEvent, or destroy the identifier. It doesn\'t send anything to the server. Just destroys the client sided object.\\n\\n```lua\\nlocal Bridge = ClientBridge.new(\\"Remote\\")\\n\\nClientBridge:Destroy()\\n\\nClientBridge:Fire() -- Errors\\n```","params":[],"returns":[{"desc":"","lua_type":"nil"}],"function_type":"method","source":{"line":542,"path":"src/ClientBridge.lua"}}],"properties":[],"types":[],"name":"ClientBridge","desc":"Client-sided object for handling networking.","source":{"line":47,"path":"src/ClientBridge.lua"}}')}}]);